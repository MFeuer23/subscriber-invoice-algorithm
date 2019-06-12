# subscriber-invoice-algorithm

Create a function that, given a list of invoices (inv) and subscribers (sub), would find subscribers who haven't paid their invoices and need to be sent a cancellation notice.

## Example Input

sub = [
  { 
    'id': 1,
    'subscription_type': "first-tier",
    'subscription_date': "May 1 2019",
    'name': "Patti Smith"
  },
  { 
    'id': 2,
    'subscription_type': "second-tier",
    'subscription_date': "Feb 15 2019",
    'name': "George Clinton"
  },
  { 
    'id': 3,
    'subscription_type': "third-tier",
    'subscription_date': "June 1 2019",
    'name': "Ellen Page"
  }
]

inv = [
  {
    'id': 1,
    'subscriber_id': 1,
    'due_date': "June 1 2019",
    'payment_date': null,
    'amount': 200
  },
  {
    'id': 2,
    'subscriber_id': 2,
    'due_date': "March 15 2019",
    'payment_date': null,
    'amount': 150
  },
  {
    'id': 3,
    'subscriber_id': 3,
    'due_date': "July 1, 2019",
    'payment_date': null,
    'amount': 100
  }
]
