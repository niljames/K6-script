import http from 'k6/http';
import * as add_div from '../commonmethod/common_method.js';
import * as sub_mul from '../cm/cm2/cm.js';


export const options = {
    tags: {
        API_Type: __ENV.Type,
        TimeStamp: String(Date.now())
    }
};

export default function () {
    const res = http.get('https://test.k6.io');
    const s = add_div.addition(6, 3);
    console.log("Sum = " + s)
    const q = add_div.division(6, 3);
    console.log("Div = " + q)
    const r = sub_mul.multiplication(6, 3);
    console.log("Mul = " + r)
    const w = sub_mul.subtraction(6, 3);
    console.log("Sub = " + w)
}