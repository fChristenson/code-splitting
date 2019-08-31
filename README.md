# Code splitting with Webpack explained

## What we will cover

- What is code splitting?
- What is lazy loading?
- When do we want to do it?

## Notes

Code splitting is when we want to remove a module from our bundle and have it be bundled as a separate chunk.

The reason we would want this is that one part of our code may change very often and one may not change so much
and by splitting our code in to multiple chunks we can allow the users browser to cache the chunk that stays the
same and just update the chunk that changed.

A common use case is that we want to chunk our third party dependencies such as React in one chunk since this code
will rarely change and keep our application code in another chunk.

Lazy loading is when we want to delay the fetching of a chunk.

This is useful when we want to initial load time of our application to be fast since we will at first send less code
and then we can fetch the remaining code when the application has become available to the user.

A great use case for lazy loading is when we have routes that may not be interesting to the user so there is no need
for us to fetch them until the user wants to see them.
