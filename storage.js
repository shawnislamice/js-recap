const addToLocalStorage = () => {
  const idInput = document.getElementById("storage-id").value;
  const storageValue = document.getElementById("storage-value").value;
  if (idInput && storageValue) {
    localStorage.setItem(idInput, storageValue);
  } else {
    alert("Enter a valid Input");
  }
  document.getElementById("storage-id").value = "";
  document.getElementById("storage-value").value = "";
};
c