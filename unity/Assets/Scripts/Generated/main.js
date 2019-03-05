"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var foo_1 = require("./mm/foo");
var foo = new foo_1.Foo(12);
foo.greet();
// UnityEngine.Debug.Log("greeting")
var go = new UnityEngine.GameObject("testing");
// let go2 = new UnityEngine.GameObject("testing2")
console.log("go.activeSelf", go.activeSelf);
go.SetActive(false);
console.log("go.activeSelf", go.activeSelf);
setTimeout(function () {
    UnityEngine.Object.Destroy(go);
}, 3000);
// 
var ss = new SampleStruct();
var SampleClass = SampleNamespace.SampleClass;
ss.field_a = 12345;
console.log("ss.field_a = " + ss.field_a);
new SampleClass.SampleInnerClass().Foo();
var scxx = new SampleClass("testcase of SampleClass:", "a1", "a2", "a3");
scxx.SetEnum(SampleEnum.b);
scxx.TestVector3([1, 2, 3]);
scxx.delegateFoo1 = new Delegate2();
scxx.delegateFoo1.on(scxx, function (a, b) {
    console.log("delegate callback from SampleClass", a, b);
});
scxx.TestDelegate1();
console.log("[JS] TestType1: " + scxx.TestType1(SampleClass));
console.log(scxx.name + ".sum = " + scxx.Sum([1, 2, 3, 4, 5]));
console.log("sampleEnum = " + scxx.sampleEnum);
var res1 = scxx.CheckingVA(1, 2, 3, 4, 5);
var res2 = scxx.CheckingVA2(1, 2, 3, 4, 5);
console.log("res1 = " + res1);
console.log("res2 = " + res2);
for (var p in DuktapeJS.Enum) {
    console.log(p);
}
// let timer1 = setInterval(() => {
//     console.log("interval tick 1")
// }, 1000)
// setInterval(() => {
//     console.log("interval tick 2")
// }, 2000)
// setTimeout((a, b) => {
//     console.log("timeout tick", a, b)
//     clearInterval(timer1)
// }, 3500, "额外参数1", 222)
// let scyy = new SampleClass("scyy")
// let v3 = new Vector3(1, 2, 3)
// scyy.TestVector3(v3)
// console.log(v3.x, v3.y, v3.z)
// var ev = new DuktapeJS.EventDispatcher()
// class JSO {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
//     foo1(phase) {
//         console.log(phase, this.name, "foo1")
//     }
//     foo2(phase) {
//         console.log(phase, this.name, "foo2")
//     }
// }
// let jso1 = new JSO("A")
// let jso2 = new JSO("B")
// ev.on("test", jso1, jso1.foo1)
// ev.on("test", jso1, jso1.foo2)
// ev.on("test", jso2, jso2.foo1)
// ev.on("test", jso2, jso2.foo2)
// ev.dispatch("test", "FIRST")
// ev.off("test", jso1, jso1.foo1)
// console.log(ev.events["test"].handlers)
// ev.dispatch("test", "SECOND")
// ev.off("test", jso2)
// ev.dispatch("test", "THIRD")
//# sourceMappingURL=main.js.map