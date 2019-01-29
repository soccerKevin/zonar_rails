Rails.application.config.middleware.insert_before 0, Rack::Cors, logger: Rails.logger do
  allow do
    origins '*localhost:4200'
    resource '*',
      headers: :any,
      expose:  ['access-token', 'expiry', 'token-type', 'uid', 'client'],
      methods: %i(get post put patch delete options head)
  end
end
