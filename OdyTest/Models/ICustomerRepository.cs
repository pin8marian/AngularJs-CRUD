using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OdyTest.Models
{
    public interface ICustomerRepository
    {
        IQueryable<Customer> GetCustomers();
        bool AddCustomer(Customer p);
        bool UpdateCustomer(Customer p);
        bool DeleteCustomer(string CustomerID);
    }
}