using System;
using System.Linq;
using OdyTest.Models;

namespace OdyTest.RepositoryImp
{
    public class CustomerRepository : ICustomerRepository
    {
        public IQueryable<Customer> GetCustomers()
        {
            NorthwindEntities entities = new NorthwindEntities();
            var clients = from r in entities.Customers select r;
            return clients;
        }

        public bool AddCustomer(Customer c)
        {
            try
            {
                NorthwindEntities entities = new NorthwindEntities();
                entities.Customers.Add(c);
                entities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }

        }

        public bool UpdateCustomer(Customer p)
        {
            try
            {
                NorthwindEntities entities = new NorthwindEntities();
                Customer clientToUpdate = (from r in entities.Customers
                                           where
                   r.CustomerID == p.CustomerID
                                           select r).FirstOrDefault();

                clientToUpdate.Address = p.Address;
                clientToUpdate.City = p.City;
                clientToUpdate.CompanyName = p.CompanyName;
                clientToUpdate.ContactName = p.ContactName;
                clientToUpdate.Country = p.Country;
                clientToUpdate.Phone = p.Phone;

                entities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool DeleteCustomer(string CustomerID)
        {
            try
            {
                NorthwindEntities entities = new NorthwindEntities();
                Customer customerToDelete = (from r in entities.Customers
                                             where
                                                 r.CustomerID == CustomerID.ToString()
                                             select r).FirstOrDefault();
                entities.Customers.Remove(customerToDelete);
                entities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}