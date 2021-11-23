const calculateBill = (billPrice, vatRate, tipRate) => {
    if (
        typeof billPrice !== "number" ||
        typeof vatRate !== "number" ||
        typeof tipRate !== "number" ||
    
        return "£" + (billPrice + (billPrice * (vatRate / 100) + tipRate));
}; 

module.exports = calculateBill;

