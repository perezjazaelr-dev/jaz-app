"use client"

import { useEffect, useState } from "react"

interface GitHubStats {
  totalRepos: number
  totalStars: number
  totalForks: number
  loading: boolean
  error: string | null
}

export function useGitHubStats(username: string) {
  const [stats, setStats] = useState<GitHubStats>({
    totalRepos: 0,
    totalStars: 0,
    totalForks: 0,
    loading: true,
    error: null,
  })

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub data")
        }

        const repos = await response.json()

        const totalRepos = repos.length
        const totalStars = repos.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0)
        const totalForks = repos.reduce((acc: number, repo: any) => acc + repo.forks_count, 0)

        setStats({
          totalRepos,
          totalStars,
          totalForks,
          loading: false,
          error: null,
        })
      } catch (error) {
        console.error("[v0] Error fetching GitHub stats:", error)
        setStats({
          totalRepos: 0,
          totalStars: 0,
          totalForks: 0,
          loading: false,
          error: "Unable to load GitHub stats",
        })
      }
    }

    fetchGitHubStats()
  }, [username])

  return stats
}
