function cancellationNotice(sub, inv) {
  let today = new Date();
  let overdueIds = [];

  for (let i = 0; i < inv.length; i++) {
    if (today > new Date(inv[i]["due_date"]) && !inv[i]["payment_date"]) {
      overdueIds.push(inv[i]["subscriber_id"])
    }
  }
  
  let overdueSubscribers = sub.filter(subscriber => overdueIds.includes(subscriber.id))
  return overdueSubscribers
}