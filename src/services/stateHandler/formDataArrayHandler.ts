import { StatusToast, showToast } from "@/components/core/ToastAlert";



export class HandleFormArrayOfObject {

  static deleteItem<T>(formData: T[], item: T): T[] {
    const form_ = [...formData];
    if (form_.length == 1) {
      showToast({
        msg: `Oops, something went wrong | limit reached`,
        type: StatusToast.DARK,
      });
      // return form_
    }
    return form_.filter((item_: T) => item_ !== item);
  }
  static AddItem<T>(formData: T[], item: T): T[] {
    const tab_ = [...formData]
    tab_.push(item);
    return tab_
  }
}




// const addArticle = () => {
//   let lastArticle = formData.articles[formData.articles.length - 1];
//   if (
//     lastArticle.idArticle === "" ||
//     lastArticle.quantity <= 0 ||
//     lastArticle.Total <= 0
//   ) {
//     return showToast({
//       message: textToast.COMPLETE_ARTICLE_FIRST,
//       typeToast: statusToast.DARK,
//     });
//   }

//   let m = [...formData.articles];
//   m.push(FORM_ARTICLE);

//   setFormData({
//     ...formData,
//     articles: m,
//   });
// };
// export { hundleFormArray, hundleFormObject };
