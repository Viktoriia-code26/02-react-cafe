import type { Votes } from "../types/votes";
import css from "./VoteStats.module.css";

interface VoteStatsProps{
    votes: Votes;
    totalVotes: number;
    positiveRate: number;

}

export default function VoteStats({ votes, totalVotes, positiveRate }: VoteStatsProps) {
    
    return (
        <div className={css.container}>
            <p className={css.stat} >Good: { votes.good}<strong>0</strong></p>
            <p className={css.stat} >Neutral: {votes.neutral} <strong>0</strong></p>
            <p className={css.stat} >Bad: {votes.bad }<strong>0</strong></p>
            <p className={css.stat} >Total: { totalVotes}<strong>0</strong></p>
            <p className={css.stat} >Positive: { positiveRate}<strong>0%</strong></p>
        </div>
    )
}
   