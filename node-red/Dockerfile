FROM nodered/node-red:4.1.0-22
USER root
# RUN addgroup rumesh && adduser -S -G rumesh rumesh
# USER rumesh

WORKDIR /data
COPY /node-red-data/package.json /data
RUN npm install --unsafe-perm --no-update-notifier --no-fund --only=production
RUN npm install

# Install node-red-themes
# RUN npm install @node-red-contrib-themes/theme-collection

WORKDIR /usr/src/node-red

# Copy _your_ Node-RED project files into place
# NOTE: This will only work if you DO NOT later mount /data as an external volume.
#       If you need to use an external volume for persistence then
#       copy your settings and flows files to that volume instead.
COPY /node-red-data/settings.js /data/settings.js
COPY /node-red-data/flows_cred.json /data/flows_cred.json
COPY /node-red-data/flows.json /data/flows.json