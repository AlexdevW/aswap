declare module "@nomicfoundation/hardhat-viem" {
  interface Contract {
    getEvents: {
      [key: string]: () => Promise<any>
    }
  }
}
