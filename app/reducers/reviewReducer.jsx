import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW, receiveReviews, receiveReview, removeReview, getReview, addReview} from 'APP/app/action-creators/reviewActionCreator';

const reviewsInitialState = {
	selectedReview: '',
	list: []
}

export default (state = reviewsInitialState, action) => {
	const newState = Object.assign({}, state);

	switch(action.type) {
		case RECEIVE_REVIEW:
			newState.selectedReview = action.review;
			break;
		case RECEIVE_REVIEWS:
			newState.list = action.reviews;
			break;
					

		default:
			return state;
	}

	return newState;
}