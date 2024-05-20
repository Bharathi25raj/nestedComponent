let commentContainer = document.querySelector('.comment-container');

commentContainer.addEventListener('click', function(e){ 
    let closestCommentContainer = e.target.closest('.comment-container');

    if(e.target.classList.contains('reply')){

        let commentReplyContainer = document.createElement('div');
        commentReplyContainer.setAttribute('class', 'comment-reply-container');
        commentReplyContainer.innerHTML = `<input placeholder="write your comment" type="text">
                                            <button type="submit" class="btn-submit">Submit</button>`;

        closestCommentContainer.appendChild(commentReplyContainer);

    } else if(e.target.classList.contains('btn-submit')){

        let commentReplyContainer = e.target.closest('.comment-reply-container');

        let input = commentReplyContainer.querySelector('input');
        let val = input.value;
        let newComment = document.createElement('div');
        newComment.setAttribute('class', 'comment-container');
        newComment.style.marginLeft = '4rem';
        newComment.innerHTML = `<h3>${val}</h3>
                                <div class="reply">Reply</div>`;

        closestCommentContainer.appendChild(newComment);
        commentReplyContainer.remove();


    }
})