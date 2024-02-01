import * as httpRequest from '~/utils/httpRequest';

export const getSuggested = async ({page = 1, perpage = 5}) => {
    // console.log(isCurrentUser)
    try {
        const token = localStorage.getItem('token');
        let res;
        if (token) {
            res = await httpRequest.get('users/suggested', {
               params: {
                   page,
                   per_page:perpage,
               },
               headers: {
                   Authorization: `Bearer ${token}`
               }
           });
        }else {
            res = await httpRequest.get('users/suggested', {
                params: {
                    page,
                    per_page:perpage,
                },
            });
        }
        // console.log(res)
        return res;
    } catch (error) {
        console.log(error);
    }
};


/* Follow */
// getfollow

export const getFollowing= async ({page=1}) => {
    try {
        const res = await httpRequest.get('me/followings', {
            params: {
                page,
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        // console.log(res)
        return res;
    } catch (error) {
        console.log(`Error get following: ${error}`);
    }
};

// [POST]: Action to follow an unser 
export const followAction = async (id) => {
    try {
        const res = await httpRequest.post(`users/${id}/follow`,{},{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        // console.log(res)
        return res.data;
    } catch (err) {
        console.log(`Error follow: ${err}`);
    }
}

// [POST]: Action to unfollow an unser
export const unfollowAction = async(id) => {
    try {
        const res = await httpRequest.post(`users/${id}/unfollow`,{},{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return res.data;
    } catch (err) {
        console.log(`Error unfollow: ${err}`);
    }
}