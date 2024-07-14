import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [formType, setFormType] = useState('book'); // 'book', 'user', 'transaction'

  const [book, setBook] = useState({
    title: '',
    author: '',
    publisher: '',
    publicationDate: '',
    isbn: '',
    genre: '',
    language: '',
    pages: '',
    copies: ''
  });

  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    membershipDate: '',
    membershipExpiryDate: '',
    userType: ''
  });

  const [transaction, setTransaction] = useState({
    userID: '',
    bookID: '',
    issueDate: '',
    dueDate: '',
    returnDate: '',
    fineAmount: '',
    transactionType: ''
  });

  const handleBookChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleTransactionChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const addBook = (e) => {
    e.preventDefault();
    setBooks([...books, book]);
    setBook({
      title: '',
      author: '',
      publisher: '',
      publicationDate: '',
      isbn: '',
      genre: '',
      language: '',
      pages: '',
      copies: ''
    });
  };

  const addUser = (e) => {
    e.preventDefault();
    setUsers([...users, user]);
    setUser({
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      membershipDate: '',
      membershipExpiryDate: '',
      userType: ''
    });
  };

  const addTransaction = (e) => {
    e.preventDefault();
    setTransactions([...transactions, transaction]);
    setTransaction({
      userID: '',
      bookID: '',
      issueDate: '',
      dueDate: '',
      returnDate: '',
      fineAmount: '',
      transactionType: ''
    });
  };

  return (
    <div className="App">
      <h1>Library Management System</h1>
      <div>
        <button onClick={() => setFormType('book')}>Add Book</button>
        <button onClick={() => setFormType('user')}>Add User</button>
        <button onClick={() => setFormType('transaction')}>Add Transaction</button>
      </div>

      {formType === 'book' && (
        <form onSubmit={addBook}>
          <h2>Add Book</h2>
          <input type="text" name="title" placeholder="Title" value={book.title} onChange={handleBookChange} /><br />
          <input type="text" name="author" placeholder="Author" value={book.author} onChange={handleBookChange} /><br />
          <input type="text" name="publisher" placeholder="Publisher" value={book.publisher} onChange={handleBookChange} /><br />
          <input type="date" name="publicationDate" value={book.publicationDate} onChange={handleBookChange} /><br />
          <input type="text" name="isbn" placeholder="ISBN" value={book.isbn} onChange={handleBookChange} /><br />
          <input type="text" name="genre" placeholder="Genre" value={book.genre} onChange={handleBookChange} /><br />
          <input type="text" name="language" placeholder="Language" value={book.language} onChange={handleBookChange} /><br />
          <input type="number" name="pages" placeholder="Number of Pages" value={book.pages} onChange={handleBookChange} /><br />
          <input type="number" name="copies" placeholder="Copies Available" value={book.copies} onChange={handleBookChange} /><br />
          <button type="submit">Add Book</button>
        </form>
      )}

      {formType === 'user' && (
        <form onSubmit={addUser}>
          <h2>Add User</h2>
          <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleUserChange} /><br />
          <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleUserChange} /><br />
          <input type="tel" name="phoneNumber" placeholder="Phone Number" value={user.phoneNumber} onChange={handleUserChange} /><br />
          <textarea name="address" placeholder="Address" value={user.address} onChange={handleUserChange} /><br />
          <input type="date" name="membershipDate" value={user.membershipDate} onChange={handleUserChange} /><br />
          <input type="date" name="membershipExpiryDate" value={user.membershipExpiryDate} onChange={handleUserChange} /><br />
          <select name="userType" value={user.userType} onChange={handleUserChange}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="generalPublic">General Public</option>
          </select><br />
          <button type="submit">Add User</button>
        </form>
      )}

      {formType === 'transaction' && (
        <form onSubmit={addTransaction}>
          <h2>Add Transaction</h2>
          <input type="text" name="userID" placeholder="User ID" value={transaction.userID} onChange={handleTransactionChange} /><br />
          <input type="text" name="bookID" placeholder="Book ID" value={transaction.bookID} onChange={handleTransactionChange} /><br />
          <input type="date" name="issueDate" value={transaction.issueDate} onChange={handleTransactionChange} /><br />
          <input type="date" name="dueDate" value={transaction.dueDate} onChange={handleTransactionChange} /><br />
          <input type="date" name="returnDate" value={transaction.returnDate} onChange={handleTransactionChange} /><br />
          <input type="number" name="fineAmount" placeholder="Fine Amount" value={transaction.fineAmount} onChange={handleTransactionChange} /><br />
          <select name="transactionType" value={transaction.transactionType} onChange={handleTransactionChange}>
            <option value="issue">Issue</option>
            <option value="return">Return</option>
            <option value="renewal">Renewal</option>
          </select><br />
          <button type="submit">Add Transaction</button>
        </form>
      )}

      <h2>Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title} by {book.author}</li>
        ))}
      </ul>

      <h2>Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name} ({user.userType})</li>
        ))}
      </ul>

      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>User ID: {transaction.userID} - Book ID: {transaction.bookID} - Type: {transaction.transactionType}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;