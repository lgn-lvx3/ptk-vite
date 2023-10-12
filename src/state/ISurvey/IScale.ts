export interface IScale {
    /** The unique identifier of the scale. */
    id: number
    /** The name of the scale. */
    name?: string

    maxScore?: number

    score?: number
    averageScore?: number
    percentageScore?: number
}
