def submission(prices):
    if not prices:
        return 0

    # Initialize the four variables for two transactions.
    buy1 = float('-inf')
    sell1 = 0
    buy2 = float('-inf')
    sell2 = 0

    # Process each price to update the best scenarios.
    for price in prices:
        # First transaction: maximize profit by buying at the lowest price.
        buy1 = max(buy1, -price)
        sell1 = max(sell1, buy1 + price)
        # Second transaction: reinvest the profit from the first sale.
        buy2 = max(buy2, sell1 - price)
        sell2 = max(sell2, buy2 + price)

    return sell2