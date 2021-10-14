const commentFormHandler = async (event) => {
  event.preventDefault();

  const blogNum = document.location.href.split('/');
  const content = document.querySelector('#comment-content').value.trim();

  if (content) {
    const response = await fetch(`/api/blog/${blogNum[4]}/comment`, {
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

const delCommentHandler = async (commentId) => {
  const response = await fetch(
    `/api/blog-entries/delete-comment/${commentId}`,
    {
      method: 'DELETE',
    }
  );
  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector('.add-comment-form')
  .addEventListener('submit', commentFormHandler);

const commentArray = document.querySelectorAll('#delete-comment');
commentArray.forEach(function (singleComment) {
  singleComment.addEventListener('click', function (event) {
    const targetComment = event.target;
    const commentId = targetComment.closest('.single-comment').dataset.id;
    deleteHandler(commentId);
  });
});
