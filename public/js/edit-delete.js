const updateFormHandler = async (event) => {
    event.preventDefault();

    // const blogId = document.location.href.split("/");
  
    const name = document.querySelector('#blog-name').value.trim();
    const subject = document.querySelector('#blog-subject').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();
  
    if (name && subject && description) {
      const response = await fetch(`/api/blogs/`, {
        method: 'POST',
        body: JSON.stringify({ name, subject, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create blog');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete blog');
      }
    }
  };
  
  document
    .querySelector('.update-blog-form')
    .addEventListener('submit', updateFormHandler);
  
  document
    .querySelector('#del-btn')
    .addEventListener('click', delButtonHandler);
  