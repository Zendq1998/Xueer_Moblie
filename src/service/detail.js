import Fetch from "./fetch.js";

const DetailService = {
  like(id, body, token) {
    return Fetch("/api/v1.0/" + id + "/courses/like/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + window.btoa(token + ":")
      },
      data: body
    });
  },
  getInfo(id, token) {
    return Fetch("/api/v1.0/courses/" + id + "/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + window.btoa(token + ":")
      }
    });
  },
  getComments(id, page, token) {
    return Fetch(
      "/api/v1.0/courses/" + id + "/comments/?page=" + page + "&per_page=10",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Basic " + window.btoa(token + ":")
        }
      }
    );
  },
  getHotComments(id, token) {
    return Fetch("/api/v1.0/courses/" + id + "/comments/hot/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + window.btoa(token + ":")
      }
    });
  },
  likeCourse(id, token) {
    return Fetch("/api/v1.0/courses/" + id + "/like/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + window.btoa(token + ":")
      }
    });
  },
  likeComment(id, token) {
    return Fetch("/api/v1.0/comments/" + id + "/like/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + window.btoa(token + ":")
      }
    });
  },
  newComment(id, token, text) {
    return Fetch("/api/v1.0/courses/" + id + "/comments/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + window.btoa(token + ":")
      },
      data: {
        body: text
      }
    });
  },
  DelLikeCourse(id, token) {
    return Fetch("/api/v1.0/courses/" + id + "/like/", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + window.btoa(token + ":")
      }
    });
  },
  DelLikeComment(id, token) {
    return Fetch("/api/v1.0/comments/" + id + "/like/", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + window.btoa(token + ":")
      }
    });
  }
};

export default DetailService;
