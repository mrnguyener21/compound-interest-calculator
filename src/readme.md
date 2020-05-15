https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator

TO DO LIST
-connect what we choose(monthly, annualy, etc) to the formulas
    - so when if i choose annual, options will have the value of 1
    - create a state for compoundRate, 
-check to see if the formulas are correct
-pass them to the chart
-start creating the chart



PROJECT LAYOUT
App
-contain the inputs
-need variables for compounded interest, amount + contributions, amount + contribution + compound interest

-
Chart
-gonna need to receive the input data from the app 
-have a calculate button which shows the graph
-What to show on chart: initial invest, total with interest but not compounded, total with commpounding interest

FORMULA
https://www.thecalculatorsite.com/articles/finance/compound-interest-formula.php
A = the future value of the investment/loan, including interest
P = the principal investment amount (the initial deposit or loan amount)
r = the annual interest rate (decimal)
n = the number of times that interest is compounded per unit t
t = the time the money is invested or borrowed for

compound interest(this will show the total amount earned)
A = P (1 + r/n)^(nt)

compound interest(only the interest earned)
A = P (1 + r/n)^(nt) - P

compound interst with monthly contributions
A = (P+(M*12)^t)(1 + r/n)^(nt)



EXAMPLE FROM STACK OVERFLOW
https://stackoverflow.com/questions/4712585/calculating-future-value-with-compound-interest-with-javascript

