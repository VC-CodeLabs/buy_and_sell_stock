function Submission(prices: number[]): number {
    return Math.max(...[
        0,
        ...prices
            .map((firstBuyPrice: number, firstBuyDay: number) => {
                return prices
                    .slice(firstBuyDay + 1) // remaining days we can sell
                    .reduce((
                        maxProfit: number, 
                        firstSellPrice: number, 
                        firstSellDay: number, 
                        sellableDays: number[],
                    ) => {
                        const maxSecondProfit: number = sellableDays
                            .slice(firstSellDay + 1) // remaining days we can buy again
                            .reduce((
                                maxSecondProfit: number, 
                                secondBuyPrice: number, 
                                secondBuyDate: number, 
                                buyableDays: number[],
                            ) => {
                                return Math.max(...[
                                    maxSecondProfit,
                                    ...buyableDays
                                        .slice(secondBuyDate + 1) // everything after we bought
                                        .filter(sellPrice => sellPrice > secondBuyPrice) // that is also positive profit
                                        .map(sellPrice => sellPrice - secondBuyPrice),
                                ]);
                            }, 0);
                        
                        return Math.max(maxProfit, firstSellPrice - firstBuyPrice + maxSecondProfit);   
                    }, 0);
            })
    ]);
};