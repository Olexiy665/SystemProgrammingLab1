/**
 * Created by alexey on 27.10.15.
 */

/**
 * Визначення классів для "типизації"
 */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UnsignedInt = function UnsignedInt(value) {
    _classCallCheck(this, UnsignedInt);

    if (typeof value != "number" || !(value ^ 0) === value) {
        try {

            throw new TypeError(value + "not a Integer");
        } catch (e) {

            console.log(e.name + ": " + e.message);
        }
        return false;
    } else if (value >= 4294967295 || value < 0) {
        try {

            throw new Error("Out of range");
        } catch (e) {

            console.log(e.name + ": " + e.message);
        }
        return false;
    } else {
        this.value = value;
    }
};

var UnsignedChar = function UnsignedChar(value) {
    _classCallCheck(this, UnsignedChar);

    if (value.length > 2 && typeof value === "string") {
        try {

            throw new TypeError(value + "not a char");
        } catch (e) {

            console.log(e.name + ": " + e.message);
        }
        return false;
    } else {
        this.value = value;
    }
};

var Double = function Double(value) {
    _classCallCheck(this, Double);

    if (typeof value != "number") {

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
/**
 *
 * @param template
 * @param key
 * @returns {*}
 * функція пошуку по неповному співпаданню.
 */
;

function disorderSearch(template, key) {
    var result;

    for (var i = 0; i < key.length; i++) {
        var reg = new RegExp(key.charAt(i));

        if (reg.test(template)) {
            template = template.replace(reg, '');

            result = true;
        } else {
            result = false;
            break;
        }
    }
    return result;
}
/**
 * клас таблиці
 */

var Table = (function () {
    function Table() {
        _classCallCheck(this, Table);

        this.table = [];
    }

    _createClass(Table, [{
        key: "addRow",
        value: function addRow(id, value, v_numb) {
            var numb = new Double(v_numb).value;
            return this.table.push({ "id": id, "value": value, "number": numb });
        }
    }, {
        key: "deleteRow",
        value: function deleteRow(v_id) {
            var id = new UnsignedInt(v_id).value;

            var result = "Error :element not found";
            this.table.forEach(function (item, i, arr) {
                if (item.id == id) {

                    console.log("Deleted");
                }
            });
            return result;
        }
    }, {
        key: "updateRowValue",
        value: function updateRowValue(v_id, value) {
            var id = new UnsignedInt(v_id).value;

            var result = "Error :element not found";
            this.table.forEach(function (item, i, arr) {
                if (item.id == id) {
                    item.value = value;
                    result = item;
                }
            });
            return result;
        }
    }, {
        key: "updateRowNumber",
        value: function updateRowNumber(v_id, v_number) {
            var id = new UnsignedInt(v_id).value;
            var number = new Double(v_number).value;
            var result = "Error :element not found";
            this.table.forEach(function (item, i, arr) {
                if (item.id == id) {
                    item.number = number;
                    result = item;
                }
            });
            return result;
        }
    }, {
        key: "searchID",
        value: function searchID(v_id) {
            var id = new UnsignedInt(v_id).value;
            var result = "Error :element not found";
            this.table.forEach(function (item, i, arr) {
                if (item.id == id) {

                    result = item;
                }
            });
            return result;
        }
    }, {
        key: "regularSearch",
        value: function regularSearch(v_key) {
            var key = new UnsignedChar(v_key).value;

            var result = "Error :element not found";

            for (var i in this.table) {

                if (disorderSearch(this.table[i].value, key)) {

                    result = this.table.splice(i, 1);
                    this.table.push(result);

                    break;
                }
            }

            return result;
        }
    }, {
        key: "showTable",
        value: function showTable() {

            var nTable = this.table.slice();

            nTable.unshift(["  ID  ", "  Value  ", "  Double  "]);

            console.log(nTable);
        }
    }]);

    return Table;
})();

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
console.log(myTable.updateRowNumber(2, 22));

console.log(myTable.regularSearch("aa"));
console.log(myTable.regularSearch("aa"));
console.log(myTable.regularSearch("va"));
console.log(myTable.regularSearch("aa"));
console.log(myTable.regularSearch("An"));
console.log(myTable.regularSearch("ra"));
myTable.showTable();
