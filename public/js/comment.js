const commentFormHandler = async (event) => {
  event.preventDefault();

  const blogNum = document.location.href.split('/');
  const content = document.querySelector('#comment-content').value.trim();
  console.log(blogNum)
  if (content) {
    const response = await fetch(`/api/blog/${blogNum[4]}/comment`, {
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.add-comment-form')
  .addEventListener('submit', commentFormHandler);


