import http from 'k6/http';
import { addition } from './commonmethod/common_method.js';

export default function () {
    http.get('https://test.k6.io');
    const s = addition(2, 3);
    console.log("Sum = " + s)
}