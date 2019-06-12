function cancellationNotice(sub, inv) {
  let today = new Date();
  let overdueNames = [];
  for (let i = 0; i < inv.length; i++) {
    if (today > new Date(inv[i]["due_date"]) && !inv[i]["payment_date"]) {
      overdueNames.push(sub[inv[i]["subscriber_id"]]["name"])
    }
  }
  return overdueNames
}