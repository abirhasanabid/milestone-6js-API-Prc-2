// task -1: console log the secondary school location of Sophia 
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}
const findSecSclLocation = data?.Sophia?.study[1]?.secondary[1]?.location;
// console.log(findSecSclLocation);

const {Sophia:{study:[,{secondary:[,{location}]}]}} = data;
// console.log(location);


// task-2: console .log  output: Petersburg, Herry

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
};
const std = students['2222']?.address['city'];
const std2 = students['3333']?.name;
// console.log(std);
// console.log(std2);

const {2222:{address:{city}}}= students;
const{3333:{name}}=students
// console.log(city);
// console.log(name);


// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name2: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}
const {data:[{bookDetails:{name2}}]}=data2;
console.log(name2);

const lastData = data2?.data[0]?.bookDetails?.name;
// console.log(lastData);
const lastData2 = data2?.data[1]?.bookCategory;
// console.log(lastData2);

 






