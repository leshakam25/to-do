const UPDATE_LIST_BODY = "UPDATE-LIST-BODY";
const SEND_LIST = "SEND-LIST";

let store = {
  state: {
    listData: [
      { id: 1, message: "Пропылесосить" },
      { id: 2, message: "Посуда" },
      { id: 3, message: "Кушкуш" },
    ],
    list: "",
  },

  listcase(action) {
    if (action.type === UPDATE_LIST_BODY) {
      store.state.list = action.body;
    }
    if (action.type === SEND_LIST) {
      let body = store.state.list;
      store.state.list = "";
      store.state.listData.push({
        id: store.state.listdata.length + 1,
        message: body,
      });
    }
  },
};

export const sendListCreator = () => ({ type: SEND_LIST });
export const updateListBodyCreator = (text) => ({
  type: UPDATE_LIST_BODY,
  message: text,
});

export default store;
