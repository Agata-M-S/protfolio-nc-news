![Plan](<Screenshot from 2023-12-11 11-06-51.png>)

## paths:
GET:
```
/topics,
/articles  --(optional queries: topic=:input&sort_by=:input&order=ASC":)
/articles/:article_id
/articles/:article_id/comments
```
POST:
```
/articles 
/articles/:article_id/comments
```
PATCH:
```
/articles/:article_id
/comments/:comment_id
```
DELETE:
```
/comments/:comment_id
```
##