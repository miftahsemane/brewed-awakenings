import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
const findProduct = (orderer, allProducts) => {
    let orderProduct = null

    for (const product of allProducts) {
        if (product.id === orderer.productId) {
            orderProduct = product
        }
    }

    return orderProduct
}

// Function whose responsibility is to find the employee for an order
const findEmployee = (orderGone, allEmployees) => {
    let orderEmployee = null

    for (const employee of allEmployees) {
        if (employee.id === orderGone.employeeId) {
            orderEmployee = employee
        }
    }

    return orderEmployee
}

export const Orders = () => {
    let html = ""
    html = "<ul>"

    for (const sell of orders) {
        const product = findProduct(sell, products)
        const employee = findEmployee(sell, employees)
        
        html += `<li>${product.name} was sold by ${employee.name} on ${new Date(sell.timestamp).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}

