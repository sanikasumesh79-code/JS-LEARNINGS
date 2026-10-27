// class student{
//     constructor(id,name,email){
//         this.id=id;
//         this.name=name;
//         this.email=email;
    
// }

// display(){
//     console.log(this.id,this.name,this.email)

// }
// }
// thanku=new student(2006,"thanku","thanku.co.in")
// thanku.display()


// class car{
//     constructor(name,brand,color){
//         this.name=name;
//         this.brand=brand;
//         this.color=this.color

//     }

// display(){
//     console.log(this.name,this.brand,this.color)
// }
// // }
// // porshe=new car('m2sports','bmw','black')
// // porshe.display()


// class animal{
//     eat(){
//         console.log('eating')
//     }
//     run(){
//         console.log('running')
//     }
// }
// class dog extends animal{

// }
// german=newdog()

// class bank{
//     constructor(name,account_num,balance){
//         this.name=name;
//         this.account_num=account_num;
//         this.balance=balance;
//     }
// display(){
//     console.log(this.name,this.account_num,this.balance)
// }
// }
// b=bank("sanika",234567889,4000)
// b.display()



class Bank {
    constructor(name, accno, branch, ifsc, balance) {
        this.name = name;
        this.accno = accno;
        this.branch = branch;
        this.ifsc = ifsc;
        this.balance = balance;
    }

    display() {
        console.log("Account Holder:", this.name);
        console.log("Account Number:", this.accno);
        console.log("Branch:", this.branch);
        console.log("IFSC Code:", this.ifsc);
        console.log("Balance:", this.balance);
    }

    checkBalance() {
        console.log("Current Balance:", this.balance);
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Deposited:", amount);
        console.log("New Balance:", this.balance);
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
            console.log("Remaining Balance:", this.balance);
        } else {
            console.log("Insufficient balance or invalid amount");
        }
    }
}

// Creating objects
let b1 = new Bank("sanika", 1234567890, "trivandrum", "BANK0001234", 5000);

let b2 = new Bank("achu", 9876543210, "Calicut", "BANK0005678", 10000);

// Object 1
b1.display();
b1.checkBalance();
b1.deposit(2000);
b1.withdraw(1000);

// Object 2
b2.display();
b2.checkBalance();
b2.deposit(500);
b2.withdraw(2000);

