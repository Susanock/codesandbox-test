/**
 * 三項演算子
 */
//ある条件 ？ 条件がtrueの時 : 条件がfalseの時
// const val1 = 0 > 1 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log (num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！！' : '許容範囲ないです';
// }
// console.log(checkSum(50, 70));

/**
 * 論理演算子の本当の意味
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("１か２はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("１も２もtrueになります");
// }

//は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// //左側がtrueだったら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
