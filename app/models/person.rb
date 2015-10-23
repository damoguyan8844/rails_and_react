# == Schema Information
#
# Table name: people
#
#  id           :integer          not null, primary key
#  first_name   :string(255)      not null
#  last_name    :string(255)
#  gender       :integer          default(0)
#  birth_date   :date
#  location     :string(255)
#  phone_number :string(255)
#  email        :string(255)
#  headline     :text(65535)
#  picture      :string(255)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Person < ActiveRecord::Base
  include PgSearch

  enum gender: [:male, :female]

  scope :sorted, ->{ order(first_name: :asc) }
  pg_search_scope :search,
                  against: [
                    :first_name,
                    :last_name,
                    :location,
                    :headline
                  ],
                  using: {
                    tsearch: {
                      prefix: true,
                      normalization: 2
                    }
                  }
end
