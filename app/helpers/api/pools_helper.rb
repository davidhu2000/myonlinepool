module Api::PoolsHelper
  def self.find_by_credentials(title, password)
    pool = Pool.find_by(title: title)
    pool && pool.valid_password?(password) ? pool : nil
  end
end
