let BudgetCategory = function(pName, pBudgetTarget){
    this.name = pName;
    this.BudgetTarget = pBudgetTarget;
}

// Now comes the code that must wait to run until the document is fully loaded
document.addEventListener("DOMContentLoaded", function (event) {

    let categoryArray = [];

    document.getElementById("addCategory").addEventListener("click", function () {
        let budgetNameValue = document.getElementById("budgetName").value;
        let budgetTargetValue = document.getElementById("budgetTarget").value;

        let temp = new BudgetCategory(budgetNameValue, budgetTargetValue);

        categoryArray.push(temp)
        displayCategory();
        document.getElementById("form-1").reset();
        document.getElementById("budgetName").focus();
    });

    let displayCategory = function() {
        for (let i in categoryArray){
            document.getElementById("categoryList")
        }
    }

});  
