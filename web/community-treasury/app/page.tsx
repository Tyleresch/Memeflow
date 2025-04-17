"use client"

import { useState } from "react"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { ConnectionProvider, WalletProvider, useWallet } from "@solana/wallet-adapter-react"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import dynamic from "next/dynamic"
import { clusterApiUrl } from "@solana/web3.js"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Award, ChevronRight, ChevronsUpDown, Clock, DollarSign, Users, Vote } from "lucide-react"

// Dynamic import for wallet modal to avoid SSR issues
const WalletModalProvider = dynamic(
  () => import("@solana/wallet-adapter-react-ui").then((m) => m.WalletModalProvider),
  { ssr: false },
)

// Global CSS import for wallet buttons
require("@solana/wallet-adapter-react-ui/styles.css")

// Mock data for proposals
const mockProposals = [
  {
    id: "1",
    title: "Campus Event Funding",
    description: "Fund the upcoming tech conference on campus with speakers and workshops.",
    amount: 500000000, // in lamports
    creator: "8ZU...",
    status: "active",
    votes: 24,
    votesNeeded: 50,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    title: "Community Hackathon Prizes",
    description: "Allocate funds for prizes at our quarterly community hackathon.",
    amount: 300000000,
    creator: "3xF...",
    status: "active",
    votes: 42,
    votesNeeded: 50,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "3",
    title: "Developer Grants Program",
    description: "Start a grants program to fund innovative projects built by community members.",
    amount: 1000000000,
    creator: "G9j...",
    status: "completed",
    votes: 67,
    votesNeeded: 50,
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
]

// Treasury stats
const treasuryStats = {
  balance: 5000000000, // 5 SOL in lamports
  members: 156,
  proposalsCount: 12,
  activeProposals: 5,
}

function TreasuryDashboard() {
  const { publicKey, connected } = useWallet()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [proposals, setProposals] = useState(mockProposals)

  // Format lamports to SOL
  const formatSol = (lamports) => {
    return (lamports / 1000000000).toFixed(2)
  }

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  async function submitProposal() {
    if (!connected) return alert("Connect wallet first")
    if (!title || !description || amount <= 0) return alert("Please fill all fields")

    try {
      const wallet = publicKey.toBase58()

      const res = await fetch("/api/proposals", {
        method: "POST",
        body: JSON.stringify({ title, description, amount, wallet }),
      })

      if (res.ok) {
        alert("Proposal created!")

        // Add to local state for immediate UI update
        const newProposal = {
          id: Date.now().toString(),
          title,
          description,
          amount,
          creator: wallet.slice(0, 4) + "...",
          status: "active",
          votes: 0,
          votesNeeded: 50,
          createdAt: new Date().toISOString(),
        }

        setProposals([newProposal, ...proposals])
        setTitle("")
        setDescription("")
        setAmount(0)
        setActiveTab("proposals")
      } else {
        alert("Error: " + res.statusText)
      }
    } catch (error) {
      console.error("Error submitting proposal:", error)
      alert("Error submitting proposal")
    }
  }

  async function voteOnProposal(id) {
    if (!connected) return alert("Connect wallet first")

    try {
      // In a real app, this would call a server endpoint to record the vote on-chain
      // For now, we'll just update the UI
      setProposals(
        proposals.map((p) => {
          if (p.id === id) {
            return { ...p, votes: p.votes + 1 }
          }
          return p
        }),
      )

      alert("Vote recorded!")
    } catch (error) {
      console.error("Error voting:", error)
      alert("Error recording vote")
    }
  }

  return (
    <div className="space-y-8">
      {/* Hero section */}
      <section className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold">On‑Chain Community Treasury</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A decentralized platform for community-driven funding decisions. Propose, vote, and execute treasury
          allocations - all on-chain.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          {!connected ? (
            <div className="flex justify-center">
              <Button className="wallet-adapter-button wallet-adapter-button-trigger">Connect Wallet</Button>
            </div>
          ) : (
            <Badge variant="outline" className="px-4 py-2 text-sm">
              Connected: {publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}
            </Badge>
          )}
        </div>
      </section>

      {/* Stats cards */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Treasury Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <DollarSign className="mr-2 h-4 w-4 text-gray-500" />
              <span className="text-2xl font-bold">{formatSol(treasuryStats.balance)} SOL</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Community Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4 text-gray-500" />
              <span className="text-2xl font-bold">{treasuryStats.members}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Proposals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <ChevronsUpDown className="mr-2 h-4 w-4 text-gray-500" />
              <span className="text-2xl font-bold">{treasuryStats.proposalsCount}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Active Proposals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-gray-500" />
              <span className="text-2xl font-bold">{treasuryStats.activeProposals}</span>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Main content tabs */}
      <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="proposals">Proposals</TabsTrigger>
          <TabsTrigger value="create">Create Proposal</TabsTrigger>
        </TabsList>

        {/* Dashboard tab */}
        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>About Community Treasury</CardTitle>
                <CardDescription>How our decentralized treasury works</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Community Governed</h3>
                    <p className="text-sm text-gray-500">
                      All treasury decisions are made collectively by community members through on-chain voting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Vote className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Transparent Voting</h3>
                    <p className="text-sm text-gray-500">
                      Every vote is recorded on the Solana blockchain, ensuring complete transparency and auditability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Award className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Award-Winning Platform</h3>
                    <p className="text-sm text-gray-500">
                      Recognized with University Award (rank 1) and Public Goods Award (rank 2) for innovation in
                      community governance.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" onClick={() => setActiveTab("proposals")}>
                  View Active Proposals <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest treasury transactions and votes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {proposals.slice(0, 3).map((proposal) => (
                    <div key={proposal.id} className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">{proposal.title}</p>
                        <p className="text-sm text-gray-500">{formatDate(proposal.createdAt)}</p>
                      </div>
                      <Badge variant={proposal.status === "active" ? "outline" : "secondary"}>
                        {proposal.status === "active" ? "Active" : "Completed"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" onClick={() => setActiveTab("create")}>
                  Create New Proposal <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Proposals tab */}
        <TabsContent value="proposals" className="space-y-6">
          <div className="grid gap-6">
            {proposals.map((proposal) => (
              <Card key={proposal.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{proposal.title}</CardTitle>
                      <CardDescription>
                        Created on {formatDate(proposal.createdAt)} by {proposal.creator}
                      </CardDescription>
                    </div>
                    <Badge variant={proposal.status === "active" ? "outline" : "secondary"}>
                      {proposal.status === "active" ? "Active" : "Completed"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{proposal.description}</p>

                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">Amount Requested:</span>
                    <span className="font-bold">{formatSol(proposal.amount)} SOL</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>
                        Votes: {proposal.votes}/{proposal.votesNeeded}
                      </span>
                      <span>{Math.round((proposal.votes / proposal.votesNeeded) * 100)}%</span>
                    </div>
                    <Progress value={(proposal.votes / proposal.votesNeeded) * 100} />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => voteOnProposal(proposal.id)}
                    disabled={proposal.status !== "active" || !connected}
                  >
                    Vote
                  </Button>
                  <Button variant="outline">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Create proposal tab */}
        <TabsContent value="create" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New Proposal</CardTitle>
              <CardDescription>Submit a funding proposal to the community treasury</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  Proposal Title
                </label>
                <Input
                  id="title"
                  placeholder="Enter a clear, descriptive title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <textarea
                  id="description"
                  className="w-full min-h-[100px] p-2 border rounded-md"
                  placeholder="Explain your proposal in detail. What will the funds be used for?"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="amount" className="text-sm font-medium">
                  Amount (lamports)
                </label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Amount in lamports (1 SOL = 1,000,000,000 lamports)"
                  value={amount}
                  onChange={(e) => setAmount(Number.parseInt(e.target.value))}
                />
                <p className="text-xs text-gray-500">Equivalent to {formatSol(amount || 0)} SOL</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={() => setActiveTab("dashboard")}>
                Cancel
              </Button>
              <Button className="ml-auto" onClick={submitProposal} disabled={!connected}>
                Submit Proposal
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default function Home() {
  const endpoint = clusterApiUrl(WalletAdapterNetwork.Devnet)
  const wallets = [new PhantomWalletAdapter()]

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <main className="container mx-auto px-4 py-8 max-w-6xl">
            <TreasuryDashboard />
          </main>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
