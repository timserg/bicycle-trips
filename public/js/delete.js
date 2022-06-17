// const { deleteForm } = document.forms;
const butt = document.querySelector('#delete');
const post = document.querySelector('.draw');

butt.addEventListener('click', async (event) => {
  event.preventDefault();
  const id = event.target.name;
  const response = await fetch(
    `/delete/${id}`,
    {
      method: 'delete',
    },
  );
  if (response.ok) {
    post.remove();
  }
});
