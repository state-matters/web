import { useRouter } from "next/router"

export default function Episode() {
  const { query } = useRouter()
  return <div>{query.episodeId}</div>
}
