import ajaxSend from "./ajaxSend";

export default class AjaxManager {
  getStartedList(callback) {
    const options = {
      method: "GET",
      query: "method=getStartedNotes",
      callback,
    };

    return ajaxSend(options);
  }

  getAllNotes(callback) {
    const options = {
      method: "GET",
      query: "method=getAllNotes",
      callback,
    };

    return ajaxSend(options);
  }

  createNotes(data, callback) {
    const options = {
      method: "POST",
      query: "method=createNotes",
      data,
      callback,
    };

    return ajaxSend(options);
  }

  getIndex(id, callback) {
    const options = {
      method: "GET",
      query: `method=getNoteById&id=${id}`,
      callback,
    };

    return ajaxSend(options);
  }

  delete(id, callback) {
    const options = {
      method: "DELETE",
      query: `method=deleteNote&id=${id}`,
      callback,
    };
    return ajaxSend(options);
  }

  isStatuschecked(id, callback) {
    const options = {
      method: "GET",
      query: `method=toggleStatusNote&id=${id}`,
      callback,
    };
    return ajaxSend(options);
  }

  modification(data, callback) {
    const options = {
      method: "POST",
      query: "method=editNote",
      data,
      callback,
    };

    return ajaxSend(options);
  }
}
