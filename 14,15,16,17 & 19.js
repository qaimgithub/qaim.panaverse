//14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const GuestsforWedding = ["Ahmed","Aqeel","Farooq","Haris"]
console.log("Hi There " +GuestsforWedding[0]+ " ,you are cordially invited to my wedding ceremony")
console.log("Hi There " +GuestsforWedding[1]+ " ,you are cordially invited to my wedding ceremony")
console.log("Hi There " +GuestsforWedding[2]+ " ,you are cordially invited to my wedding ceremony")
console.log("Hi There " +GuestsforWedding[3]+ " ,you are cordially invited to my wedding ceremony")
//15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
console.log("Unfortunately, " + GuestsforWedding[3] + ", won't be joining us as he has to fly for turkey.");
GuestsforWedding[3] = "Waqui"
console.log("Sorry for the reinvite," + GuestsforWedding[0] +"! " + GuestsforWedding[3] +" will be joining us too. Just wanted to inform y'all")
console.log("Sorry for the reinvite," + GuestsforWedding[1] +"! " + GuestsforWedding[3] +" will be joining us too. Just wanted to inform y'all")
console.log("Sorry for the reinvite," + GuestsforWedding[2] +"! " + GuestsforWedding[3] +" will be joining us too. Just wanted to inform y'all")
//16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
console.log("We've found ourselves a bigger table so lets invote more people to double the fun")
GuestsforWedding.splice(0,0,"Ahmar")
GuestsforWedding.splice(2,0,"Bazil")
GuestsforWedding.splice(6,0,"Zohair")
console.log(GuestsforWedding + " You all are cominggg")
//17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
console.log("looks like the tables not gonna be here anytime soon se we gotta shrink down the strength to only two people.")
GuestsforWedding.pop()
console.log("sorry Xebbi but we dont have enough space to accomodate you")
GuestsforWedding.pop()
console.log("sorry Waqui but we dont have enough space to accomodate you")
GuestsforWedding.splice(0,1)
console.log("Sorry Ahmar we dont need you anymore")
GuestsforWedding.splice(1,1)
console.log("Sorry Bazil Allah Hafiz")
GuestsforWedding.splice(1,1)
console.log("you are not gonna come anyway Aqeel")
console.log(GuestsforWedding + " Finally I can get married")
GuestsforWedding.pop()
GuestsforWedding.pop()
console.log(GuestsforWedding)
//19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(GuestsforWedding.length + " People are invited to the dinner")