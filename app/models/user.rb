# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  attr_reader :password

  has_many(:backers)
  has_many(:rewards, through: :backers)

  has_many(:likes)
  has_many(:liked_projects, through: :likes, source: :project)

  def authored_projects
    arr = []
    Project.all.each do |project|
      arr << project if project.author_id == self.id
    end
    arr
  end

  def backed_projects
    arr = []
    self.rewards.each do |reward|
      arr.push(reward.project)
    end
    arr.uniq
  end

  def uniq_rewards
    arr = []
    self.rewards.each do |reward|
      arr.push(reward)
    end
    arr.uniq
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(username,password)
    @user = User.find_by_username(username)
    if @user
      return @user if @user.is_password?(password)
    end
    nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
