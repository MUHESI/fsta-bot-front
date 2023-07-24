
export class HandleFormObject {

  static handleMainLevel<T>(formData: T, key: keyof T, value: string | number | boolean): T {
    let form_ = { ...formData };
    return { ...form_, [key]: value };
  }
  static handleSecondLevel<T>(formData: T, { fKey, lKey }: { fKey: keyof T, lKey: string }, value: string | number | boolean): T {
    let formFkey = { ...formData[fKey] };
    formFkey = { ...formFkey, [lKey]: value };
    return { ...formData, [fKey]: formFkey };
  }
  static handleThirdLevel<T>(formData: T | any, { firstKey, secondKey, lastKey }: { firstKey: keyof T, secondKey: string, lastKey: string }, value: string | number | boolean
    ): T {
    let form = { ...formData };
    form[firstKey][secondKey][lastKey] = value;
    return { ...form };
  }
}





// const hundleFormArray = {
//   pushObject: (formData = [{}], objectToPush = {}) => {
//     formData.push(objectToPush);
//     return formData;
//   },
//   editSpecificElt: (initArray = [{}], index = 0, { value, label }) => {
//     let obj_ = initArray[index];
//     obj_ = { ...obj_, [label]: value };
//     initArray[index] = obj_;
//     return initArray;
//   },
//   removeObject: (initArray = [{}], index = 0) => {
//     if (initArray.length <= 1) {
//       showToast({
//         message: "Limite atteinte",
//         typeToast: statusToast.DARK
//       });
//       return;
//     }
//     const arr_ = [...initArray];
//     arr_.splice(index, 1);
//     return arr_;
//   }
// };

// export { hundleFormArray, hundleFormObject };
