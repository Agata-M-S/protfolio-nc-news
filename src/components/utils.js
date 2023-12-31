import axios from "axios";

const api = axios.create({
	baseURL: "https://portfolio-news-api.onrender.com/api",
});
export const config = {
	params: {
		limit: 10,
		page: 1,
	},
};

export const getAllArticles = (page, topic, sortBy, order) => {
	const params = {
		topic: topic,
		sort_by: sortBy,
		order: order,
		limit: 9,
	};
	return api.get(`/articles?page=${page}`, { params }).then((res) => {
		return res.data;
	});
};

export const getArticleById = (id) => {
	return api.get(`/articles/${id}`).then((res) => {
		return res.data;
	});
};

export const getCommentsByArticleId = (id, page) => {
	const params = {
		page: page,
		limit: 3,
	};
	return api
		.get(`/articles/${id}/comments`, { params })
		.then((res) => {
			return res.data;
		})
};

export const patchVotes = (id, num) => {
	return api.patch(`/articles/${id}`, { inc_votes: num }).then((res) => {
		return res.data;
	});
};

export const getAllUsers = () => {
	return api.get("/users").then((res) => {
		return res.data;
	});
};

export const postComment = (id, username, commentText) => {
	const body = {
		username: username,
		body: commentText,
	};
	return api.post(`/articles/${id}/comments`, body).then((res) => {
		return res.data;
	});
};

export const deleteCommentById = (id) => {
	return api.delete(`/comments/${id}`);
};

export const getTopics = () => {
	return api.get("/topics").then((res) => {
		return res.data;
	});
};

export function formatDate(dateString) {
	const options = {
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	};
	return new Date(dateString).toLocaleDateString([], options);
}
