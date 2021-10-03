export interface IssModel {
    timestamp: Date,
    iss_position: {
        longitude: string,
        latitude: string
    },
    message: string
}