# The Node version that we'll be running for our version of React.
# You may have to search the Node directory for a version that fits
# the version of React you're using.
FROM node

# Create a work directory and copy over our dependency manifest files.
RUN mkdir /app
WORKDIR /app
COPY . /app

# If you're using yarn:
#  yarn build
RUN npm install && npm install axios

# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 3000

ENTRYPOINT ["npm"]
CMD ["start"]