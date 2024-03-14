// UserDashboard.jsx

import React, { useState } from 'react';

function UserDashboard() {
    const [bankDetails, setBankDetails] = useState({
        accountHolderName: '',
        accountNumber: '',
        ifscCode: '',
        bankName: '',
        bankCity: '',
        branchName: '',
        relationWithAccountHolder: ''
    });

    const [showBankUpdateForm, setShowBankUpdateForm] = useState(false);

    const showLogo = () => {
        // Toggle between showing text and image logo
        setShowLogo(!showLogo);
    };

    const showBankDetails = () => {
        // Show bank details form and hide dashboard details
        setShowBankUpdateForm(true);
    };

    const saveBankDetails = () => {
        // Save bank details and display them on the dashboard
        // Assuming you have a function to save the data to a backend or state management system
        setBankDetails({
            accountHolderName: document.getElementById('accountHolderName').value,
            accountNumber: document.getElementById('accountNumber').value,
            ifscCode: document.getElementById('ifscCode').value,
            bankName: document.getElementById('bankName').value,
            bankCity: document.getElementById('bankCity').value,
            branchName: document.getElementById('branchName').value,
            relationWithAccountHolder: document.getElementById('relationWithAccountHolder').value
        });
        setShowBankUpdateForm(false);
    };

    const search = () => {
        // Handle search functionality here
        alert('Search functionality will be implemented here.');
    };

    return (
        <div className="bg-gray-100">
            <nav className="bg-gray-800 text-white py-4">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div id="logoContainer">
                        <a href="#" className="text-xl font-semibold" onClick={showLogo}>
                            Logo
                        </a>
                        <img src="img/bank.jpeg" alt="Logo" id="logoImage" style={{ display: 'none' }} />
                    </div>

                    {/* Navigation Links */}
                    <div className="nav-links">
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:text-gray-300">Home</a></li>
                            <li><a href="#" className="hover:text-gray-300">Services</a></li>
                            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                            <li><a href="#" className="hover:text-gray-300">Offers</a></li>
                            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                        </ul>
                    </div>

                    {/* Search Form */}
                    <form id="searchForm" className="flex items-center flex-1 lg:ml-6" onSubmit={(e) => { e.preventDefault(); search(); }}>
                        <input type="text" className="border rounded-l-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500" placeholder="Search..." />
                        <button type="submit" className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-r-md">Search</button>
                    </form>
                </div>
            </nav>

            <div className="flex flex-col lg:flex-row">
                {/* Sidebar */}
                <div className="w-full lg:w-48 bg-gray-800 text-white py-4 flex-none">
                    <ul>
                        <li><a href="#" className="block py-2 px-4" onClick={showBankDetails}>My Dashboard</a></li>
                        <li><a href="#" className="block py-2 px-4">TOTM Links</a></li>
                        <li><a href="#" className="block py-2 px-4">Daily Summary</a></li>
                        <li><a href="#" className="block py-2 px-4 bg-gray-700">Bank Details</a></li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Editable Input Screen */}
                        <div className={`bg-white rounded-lg p-6 ${showBankUpdateForm ? '' : 'hidden'}`} id="bankUpdateForm">
                            <h2 className="text-lg font-semibold mb-4">Update Bank Details</h2>
                            <form id="bankDetailsForm" className="space-y-4">
                                <div>
                                    <label htmlFor="accountHolderName" className="block">Account Holder Name:</label>
                                    <input type="text" id="accountHolderName" name="accountHolderName" className="w-full border rounded-md px-4 py-2" />
                                </div>
                                <div>
                                    <label htmlFor="accountNumber" className="block">Account Number:</label>
                                    <input type="text" id="accountNumber" name="accountNumber" className="w-full border rounded-md px-4 py-2" />
                                </div>
                                <div>
                                    <label htmlFor="ifscCode" className="block">IFSC Code:</label>
                                    <input type="text" id="ifscCode" name="ifscCode" className="w-full border rounded-md px-4 py-2" />
                                </div>
                                <div>
                                    <label htmlFor="bankName" className="block">Bank Name:</label>
                                    <input type="text" id="bankName" name="bankName" className="w-full border rounded-md px-4 py-2" />
                                </div>
                                <div>
                                    <label htmlFor="bankCity" className="block">Bank City:</label>
                                    <input type="text" id="bankCity" name="bankCity" className="w-full border rounded-md px-4 py-2" />
                                </div>
                                <div>
                                    <label htmlFor="branchName" className="block">Branch Name:</label>
                                    <input type="text" id="branchName" name="branchName" className="w-full border rounded-md px-4 py-2" />
                                </div>
                                <div>
                                    <label htmlFor="relationWithAccountHolder" className="block">Relation with Account Holder:</label>
                                    <input type="text" id="relationWithAccountHolder" name="relationWithAccountHolder" className="w-full border rounded-md px-4 py-2" />
                                </div>
                                <div>
                                    <label className="block mb-2">Consent (T&C)</label>
                                    <input type="checkbox" id="consentCheckbox" name="consentCheckbox" className="mr-2" />
                                    <label htmlFor="consentCheckbox">I agree to the Terms & Conditions</label>
                                </div>
                                <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={saveBankDetails}>Save</button>
                            </form>
                        </div>

                        {/* View Screen */}
                        <div className="bg-green-500 rounded-lg p-6 text-white hidden" id="dashboardDetails">
                            <h2 className="text-lg font-semibold mb-4">Bank Details</h2>
                            <div className="text-white">
                                <p>Account Holder Name: <span id="viewAccountHolderName">{bankDetails.accountHolderName}</span></p>
                                <p>Account Number: <span id="viewAccountNumber">{bankDetails.accountNumber}</span></p>
                                <p>IFSC Code: <span id="viewIFSCCode">{bankDetails.ifscCode}</span></p>
                                <p>Bank Name: <span id="viewBankName">{bankDetails.bankName}</span></p>
                                <p>Bank City: <span id="viewBankCity">{bankDetails.bankCity}</span></p>
                                <p>Branch Name: <span id="viewBranchName">{bankDetails.branchName}</span></p>
                                <p>Relation with Account Holder: <span id="viewRelationWithAccountHolder">{bankDetails.relationWithAccountHolder}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;
