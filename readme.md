## Make Your Logs Colorfull

`black,red,blue,cyan,purple,white,yellow,green`

### Total 8 Colors

For use Just Clone this Repo inside your project
&
Import or require Cloned Folder

- example:
  - `const betterLog =  require("./betterLogs")`
    // will print the instructions
  - `betterLog.manual()` -`betterLog.red(variable as argument)`

---

note: instead of "const betterLog" you can use fancy names like 'log,print,color etc..'

- example:
  - `const print =  require("./betterLogs")`
  - `print.manual()` -`print.red(any typeof variable as argument)`

## How it is differet From Chalk (npm package)

- it does not return anything
- you dont need to use console.log()
- replacement for console.log()
- accepts all type of data Type -[string,number,boolean,array,object,Symbol,null,undefined]
