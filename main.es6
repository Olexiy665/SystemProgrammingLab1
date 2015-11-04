/**
 * Created by alexey on 27.10.15.
 */

/**
 * Визначення классів для "типизації"
 */
class UnsignedInt {
    constructor(value){
        if((typeof value != "number") || !(value ^ 0) === value ){
            try {

                throw new TypeError(value + "not a Integer");

            } catch (e) {

                console.log(e.name + ": " + e.message);

            }
            return false;
        } else  if(value >= 4294967295 || value < 0){
            try {

                throw new Error("Out of range");

            } catch (e) {

                console.log(e.name + ": " + e.message);

            }
            return false;
        } else {
            this.value = value;
        }
    }
}


class UnsignedChar {
    constructor(value){
          if(value.length > 2 && (typeof value === "string")) {
            try {

                throw new TypeError(value + "not a char");

            } catch (e) {

                console.log(e.name + ": " + e.message);

            }
            return false;
        } else {
            this.value = value;
        }
        }
    }
class Double {
    constructor(value){

        if((typeof value != "number")) {

            try {

                throw new TypeError(value + " not a Double");

            } catch (e) {

                console.log(e.name + ": " + e.message);

            }
            return false;
        } else {
            this.value = value;
        }

    }
}
/**
 *
 * @param template
 * @param key
 * @returns {*}
 * функція пошуку по неповному співпаданню.
 */
function disorderSearch(template, key){
    var result;

    for(let i = 0; i < key.length; i++){
        let reg = new RegExp(key.charAt(i));

        if(reg.test(template)){
            template =  template.replace(reg, '');

            result = true;
        }else {
            result = false;
            break;
        }

    }
    return result;

}
/**
 * клас таблиці
 */
class Table{

   constructor(){
     this.table = [];


}
   addRow(id, value, v_numb){
       let numb = new Double(v_numb).value;
       return  this.table.push({"id":id, "value":value, "number":numb});


   }
    deleteRow(v_id){
        let id = new UnsignedInt(v_id).value;

        var result = "Error :element not found";
        this.table.forEach(function(item, i, arr){
            if(item.id == id){

             console.log("Deleted");

            }
        })
        return result;
    }
    updateRowValue(v_id, value){
        let id = new UnsignedInt(v_id).value;

        var result = "Error :element not found";
        this.table.forEach(function(item, i, arr){
            if(item.id == id){
                item.value=value;
                result = item;
            }
        })
        return result;
    }

    updateRowNumber(v_id, v_number){
        let id = new UnsignedInt(v_id).value;
        let number = new Double(v_number).value;
        var result = "Error :element not found";
        this.table.forEach(function(item, i, arr){
            if(item.id == id){
                item.number=number;
                result = item;
            }
        })
        return result;
    }

    searchID(v_id){
        let id = new UnsignedInt(v_id).value;
        var result = "Error :element not found";
        this.table.forEach(function(item, i, arr){
            if(item.id == id){

                result = item;
            }
        });
        return result;
    }



    regularSearch(v_key){
        let key = new UnsignedChar(v_key).value;

        var result = "Error :element not found";


        for(var i in this.table){



            if((disorderSearch(this.table[i].value,key))){



                result = this.table.splice(i,1);
                this.table.push(result);

                break;
            }
        }

         return result;
    }
    showTable(){

        var nTable  = this.table.slice();

      nTable.unshift(["  ID  ", "  Value  ", "  Double  "]);

        console.log(nTable);
    }
}

var myTable = new Table();

myTable.addRow(1, "JavaScript", 1.1);
myTable.addRow(2, "JavaScript", 2);
myTable.addRow(3, "JavaScript", 4);
myTable.addRow(4, "JavaScript", 5);

myTable.addRow(6, "AngularJS", 1);
myTable.addRow(7, "AngularJS", 2);
myTable.addRow(8, "Ruby", 6);
myTable.addRow(9, "EcmaScript", 6);
myTable.showTable();
myTable.deleteRow(9);
console.log(myTable.searchID(3));
console.log(myTable.updateRowNumber(2,22));

console.log(myTable.regularSearch("aa"));
console.log(myTable.regularSearch("aa"));
console.log(myTable.regularSearch("va"));
console.log(myTable.regularSearch("aa"));
console.log(myTable.regularSearch("An"));
console.log(myTable.regularSearch("ra"));
myTable.showTable();




