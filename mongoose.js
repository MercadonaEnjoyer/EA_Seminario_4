"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// 2. Create a Schema corresponding to the document interface.
var catSchema = Schema({
    name: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "Owner" },
    age: { type: Number, required: true },
    breed: { type: String, required: true },
    image: String
});
var ownerSchema = Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    image: String
});
// 3. Create a Model.
var Cat = mongoose.model('Cat', catSchema);
var Owner = mongoose.model('Owner', ownerSchema);
run().catch(function (err) { return console.log(err); });
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var owner1, cat1, owner2, cat2, cat3, cats, deleteCat, updateCat, popCats;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // 4. Connect to MongoDB
                return [4 /*yield*/, (0, mongoose_1.connect)('mongodb://127.0.0.1:27017/test')];
                case 1:
                    // 4. Connect to MongoDB
                    _a.sent();
                    owner1 = new Owner({
                        name: "Aran",
                        age: 21,
                        email: "aran.huarte@estudiantat.upc.edu",
                    });
                    return [4 /*yield*/, owner1.save()];
                case 2:
                    _a.sent();
                    cat1 = new Cat({
                        name: "Mittens",
                        owner: owner1._id,
                        age: 4,
                        breed: "Sphinx",
                        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffloppapedia-revamped.fandom.com%2Fwiki%2FBingus&psig=AOvVaw2TzNPM5s5pvEif4awnmoQa&ust=1709573071986000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDng4_O2IQDFQAAAAAdAAAAABAE"
                    });
                    return [4 /*yield*/, cat1.save()];
                case 3:
                    _a.sent();
                    owner2 = new Owner({
                        name: "Pepe",
                        age: 22,
                        email: "pepe.ejemplo@estudiantat.upc.edu",
                    });
                    return [4 /*yield*/, owner2.save()];
                case 4:
                    _a.sent();
                    cat2 = new Cat({
                        name: "Pants",
                        owner: owner2._id,
                        age: 6,
                        breed: "Mountain lion",
                        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffloppapedia-revamped.fandom.com%2Fwiki%2FBingus&psig=AOvVaw2TzNPM5s5pvEif4awnmoQa&ust=1709573071986000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDng4_O2IQDFQAAAAAdAAAAABAE"
                    });
                    return [4 /*yield*/, cat2.save()];
                case 5:
                    _a.sent();
                    cat3 = new Cat({
                        name: "Fern",
                        owner: owner2._id,
                        age: 2,
                        breed: "Snow leopard",
                        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffloppapedia-revamped.fandom.com%2Fwiki%2FBingus&psig=AOvVaw2TzNPM5s5pvEif4awnmoQa&ust=1709573071986000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDng4_O2IQDFQAAAAAdAAAAABAE"
                    });
                    return [4 /*yield*/, cat3.save()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, Cat.
                            find().
                            populate('owner').
                            exec()];
                case 7:
                    cats = _a.sent();
                    cats.forEach(function (element) {
                        console.log("%s's owner is: %s", element.name, element.owner.name);
                    });
                    return [4 /*yield*/, Cat.deleteOne({ name: "Pants" })];
                case 8:
                    deleteCat = _a.sent();
                    return [4 /*yield*/, Cat.findOneAndUpdate({ name: "Fern" }, {
                            owner: owner1._id,
                        }, { new: true })];
                case 9:
                    updateCat = _a.sent();
                    return [4 /*yield*/, Cat.
                            find().
                            populate('owner').
                            exec()];
                case 10:
                    popCats = _a.sent();
                    popCats.forEach(function (element) {
                        console.log("%s's owner is: %s", element.name, element.owner.name);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
